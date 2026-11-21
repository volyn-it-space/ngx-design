/**
 * Copies text to the clipboard, including text that is still loading.
 *
 * Safari only allows clipboard writes that start inside the click handler, so awaiting a fetch and
 * then calling `writeText` fails there. Passing the pending text to a `ClipboardItem` keeps the
 * write tied to the click. Browsers without that support fall back to `writeText`.
 *
 * Browser-only: call it from event handlers, never during prerender.
 */
export async function copyText(text: string | Promise<string>): Promise<void> {
	if (
		typeof text !== 'string' &&
		typeof ClipboardItem !== 'undefined' &&
		typeof navigator.clipboard?.write === 'function'
	) {
		try {
			await navigator.clipboard.write([
				new ClipboardItem({
					'text/plain': text.then((value) => new Blob([value], { type: 'text/plain' })),
				}),
			]);

			return;
		} catch {
			// Older engines reject promise values; retry with plain text below.
		}
	}

	await navigator.clipboard.writeText(await text);
}
