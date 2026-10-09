# Org Override Branches

This repository uses organization branches as CI/CD override inputs for delivered Design catalog sites. They are not normal feature branches and should stay small.

The `.github/workflows/update-orgs.yml` workflow runs on pushes to `master`. For each target organization it checks out the matching org branch as an override source, copies that branch's `src/` over the base `src/`, writes `CNAME`, and force-pushes the result to the org repository's `master` branch.

## Target Organization Branches

- `WebArtWork`
- `greece-it-space`
- `london-it-space`
- `IT-Kamianets`
- `ternopil-space`
- `uman-it-space`
- `volyn-it-space`
- `vinnytsia-space`
- `frankivsk-space`
- `chernivtsi-space`

## Favicon Flow

Use PNG favicons everywhere in this workflow.

- Source file: `src/assets/favicon.png`
- HTML reference: `favicon.png`
- MIME type: `image/png`
- Org override file: `src/assets/favicon.png`

Do not add `.ico` favicons to new branches.

## Branch Contents

Current Design org branches are branding-only and should contain only:

```text
src/assets/logo.png
src/assets/favicon.png
```

Do not add files that are byte-for-byte identical to `master`. The update workflow already starts from `master`, so redundant branch files make reviews noisier and future upgrades harder.

## Default Languages

Design catalog pages are currently static English design references. If this repository gains localized visible labels, keep `master` and `dev` Ukrainian by default, use English for `london-it-space`, and Greek (`el`) for `greece-it-space`, matching the other template repositories.

Keep route tokens, slugs, IDs, icon names, asset paths, and language codes technical and stable.

## Verification

Before pushing an org branch, verify its file list:

```sh
git ls-tree -r --name-only origin/<org-branch>
```

For current Design org branches, the output should be exactly the two branding files listed above.

## Worktree Workflow

Use a detached worktree when preparing an organization branch so the main source workspace stays clean:

```sh
git worktree add --detach <temp-worktree> origin/<org-branch>
# update only the intended override files
git add <files>
git commit -m "<message>"
git push origin HEAD:<org-branch>
git worktree remove <temp-worktree>
```
