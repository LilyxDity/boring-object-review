[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/LilyxDity/boring-object-review/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/LilyxDity/boring-object-review/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

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

[The most boring object, reviewed in one line — make.fun bounty](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
