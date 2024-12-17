---
  author: 'René Esteves'
  date: '2024/11/17'
  description: 'A short rambling on the subject of this website, and how it was built.'
  title: 'Popsicle sticks, duct tape, and Next.js'
---

# Popsicle sticks, duct tape, and Next.js

Why would anyone go through the trouble of doing any of this? Web development is a most disagreeable hobby and/or career path. Steer clear! Heed my warnings! It's not too laaaaa—

## Straight to the Source

You can find the source code for this site, warts and all, on its [GitHub repo](https://github.com/robobeau/robobeau.com).

## Hopping on the Next.js Bandwagon

I use Next.js at my job, in which I managed to mash my fists onto a keyboard long enough for a working e-commerce cart and checkout system to materialize. Admittedly, I had ~~antagonists~~ help building it, but I hadn't stood the site up from scratch. Since we're working on Next.js 14 for a new project _(started shortly before Vercel announced Next.js 15!)_, I decided to learn more about it the best way I knew: By banging my head against that particular brick wall.

### Key Points

- The `/app` directory is a bit of a learning curve; its rigidity takes a while to get used to. It feels like a decent _(but clumsy?)_ attempt to enforce some discipline in developing React apps. It is not junior friendly.
- React Server Components are pretty cool! I've yet to fully squeeze the juice out of these, since this site is mostly static. My only real complaint is that I wish React.Context just _worked_ in RSC, which is a common enough complaint that the React team is looking into it.
- Wow! Parallel routes are really neat!
- Wow! Parallel routes are not production ready!
- Jury's still out on Server Actions. Maybe I'll implement a guestbook in the future? If I do, I'll make sure to come back and update this post!

## MDX Gon' Give It to Ya'

This site employs [MDX](https://mdxjs.com) for some of its pages, including the [About Me](/about) page, and the very blog post you're currently reading! I enjoy using [Obsidian](https://obsidian.md) as a second brain, and [Markdown](https://www.markdownguide.org) is a simple, easy-to-use markup language for writing documents! MDX lets you do some nifty stuff, like using JSX in your Markdown files! You can also customize how it renders each construct! That's neat!

In the About Me page, I use JSX to correct a [small accessibility foible](https://github.com/robobeau/robobeau.com/blob/main/src/components/AboutMeProgram/about-me.mdx?plain=1#L10) I inflicted upon myself for the sake of a dumb joke! Check out the [source code](https://github.com/robobeau/robobeau.com/blob/main/src/app/blogs/2024/11/17/popsicle-sticks-duct-tape-and-nextjs.md) for this blog post whenever you get the chance!

## A Meditation on Tailwind

I went out of my way to try out Tailwind for this project, since [create-next-app](https://www.npmjs.com/package/create-next-app) offers it as an option, and I've no prior experience with it. Long story short, I don't like it. 

### Key Points

- I'm just not a fan of class soup.
- The speed that composability provides is more or less nullified by the learning curve.
- If I wanted to compose classes, I think I'd prefer LESS/SASS mixins. Tailwind _does_ provide a way to compose classes by using their [@apply directive](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply), but even _they_ are hesitant to recommend that approach, given it goes against their entire ethos. Even then, see #2.
- The cost benefit of lower CSS file sizes doesn't seem to matter on a site of this scale. Maybe one day I'll do a cost analysis and see how much the overhead of Tailwind fares against the total file size of CSS generated by SASS. Maybe one day I'll win the lotto.

## Netlify, huh?

To start, yeah. I intend to look into [OpenNext](https://opennext.js.org) in the future, since the e-commerce site my team works on is currently hosted on Netlify, and we intend on fully controlling our deployment process, in time. Realistically, though, for this site? I may leave it on Netlify's free plan, unless it suddenly gets the Reddit hug of death and I get screwed with bandwidth costs.

## Miscellany

Didn't have a good place to put this, but I wanted to shout out [react-draggable](https://github.com/react-grid-layout/react-draggable) and [react-resizable](https://github.com/react-grid-layout/react-resizable) for making this site a ~~giant pain in the ass~~ lot more fun to develop! Truly, this site wouldn't be able to achieve its theme without the tactility of draggable, resizable windows!

## The Burning Question

So, why Windows 3.1...? Eh, why not? I've seen a few 95-flavored sites out there, and while fun and creative, there's a certain redundancy in emulating an operating system that's similar to the one you're likely using as you read this _([73% market share!](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems))_. Windows 3.1 is so charmingly clumsy that I feel more nostalgic for it's UI/UX than its 9X counterparts. It's where I cut my teeth with computers!

Something I really enjoy about 3.1 is the skeuomorphic design of the desktop. It's the top of your desk. On which you put stuff. Conceptually easy to understand! Folders open up to files, and you can shuffle them around as messy as you like. Ignoring all the obvious problems that you're immediately thinking of, that's a neat paradigm! I feel like we, as a society, have de-emphasized use of the desktop in operating systems. Do you use yours? Or is it sitting there empty for the sake of an A E S T H E T I C wallpaper? It's a darn shame, I say as my hair visibly turns whiter by the second...

## W.I.P.

I've got a couple of features I want to implement on this site, as well as some bug fixes for things you may or may not have noticed!

- MIDI Player!
- Configurable wallpaper!
- Guestbook and/or Contact Form!
- Instrumentation!

Did you know this site is _somewhat_ responsive? I've set up a couple of breakpoints, but most people will probably only see the smallest "mobile" breakpoint, or the largest "desktop" one. Just, uhhhhh... don't resize the browser while a window is maximized! I still have to fix that... 😅