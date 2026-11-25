# The Most Boring Object, Reviewed in One Line

A one-line review of the most boring everyday object I could think of — the
doorstop — written for the make.fun bounty of the same name.

## The entry

> The doorstop: a wedge whose whole career is stopping a door from doing the one thing doors are for — closing.

## Why this line

Twelve candidate lines were brainstormed and scored against the brief's
criteria (boring + everyday, true observation, laugh lands, tight and fast).
See `candidates.md` in the build notes for the full list and scores.

The doorstop won because the joke is the object's own dullness: a wedge
whose entire job is stopping a door from doing the one thing doors are for.
It is short (109 characters), true, and the last word — "closing" — is the
punchline.

## How it works

`main.ts` writes the line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). No trailing newline, no network,
deterministic output.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

## Bounty

https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
