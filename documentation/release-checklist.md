# Release Checklist

Use this checklist before pushing `master` or preparing organization override branches.

- Run the project build when the local Node version satisfies Angular's engine requirement.
- Verify `src/index.html` references `favicon.png` with MIME type `image/png`.
- Keep org override branches minimal: only files that differ from `master`.
- Verify branch file lists with `git ls-tree -r --name-only origin/<org-branch>`.
- Do not commit or push org branch changes until the branch file list has been reviewed.
