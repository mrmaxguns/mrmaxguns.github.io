---
title: Choosing the right element – accessible web design
categories: web
tags: web accessibility HTML
---

Accessible design means creating software that can be used easily by
all users. This entails making sure that any user can easily interact
with an application, sometimes with the support of assistive
technology like screen readers. Focusing on accessibility is important
because people who are affected by blindness and other disabilities
will be able to interact with the application in a meaningful way.

This article aims to illustrate one way to make web pages more
accessible by outlining various HTML tags that provide semantic
information about the content and structure of a document. These tags
allow special software, like screen readers to better understand the
layout of a document and to make document navigation easier.

## A world full of `<div>`s

When I fist took up web development, I would separate the content of
my website with the help of `<div>` elements. All regular text would
simply be put in `<p>` elements, while larger text would be put in a
heading element of the appropriate size. Everything else would be
styled with CSS. Following this pattern, my websites would usually
look something like this:


```html
<div class="title">
  <h1>My cool website!</h1>
</div>

<div class="navigation">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>

<div class="content">
  <h6>Welcome to my site</h6>
  <p>This site is home to the infamous Cracker Cookie Jr.</p>

  <div class="section">
    <h3>Cookies</h3>
    <p>I think cookies are delicious!</p>
  </div>
  
  <div class="section">
    <h3>Crackers</h3>
    <p>Crackers are nice, too!</p>
  </div>
  
  <div class="comments">
    <div class="comment">
      <p>I love you Cracker!</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>Contact me at cookie@example.com.</p>
  <h1>Have a nice day!</h1>
</div>
```

There are a few problems with the accessibility of this page. Let's
break down each part of the HTML source to get an idea of what was
done incorrectly and what can be done to make this HTML more
accessible.

## The `<header>` element

Let's take a look at the first part of the HTML document:

```html
<div class="title">
  <h1>My cool website!</h1>
</div>
```

This part of the document is the title. Most people can tell right
away by the big bold letters of the `<h1>` rendered by the
browser. But there is an accessibility issue---how does a screen reader
know that this section is the main document header? It doesn't, and
that's a problem.[^header-identification]

HTML is used to declare document structure. Styling is done via CSS,
and interactivity is enabled with JavaScript. Software that reads HTML
looks at the document structure for a variety of purposes, including
generating a table of contents. Thus, it is highly important to choose
the most specific element that conveys exactly what role the content
within it plays.

According to the Mozilla Developer Network (MDN), the `<div>` is "the
generic container for flow content." It's a generic container---it
reveals nothing about the structure of the document. The `<div>`
element should be used to group multiple elements, usually to apply
specific CSS styling. It shouldn't be used to indicate document
structure.

In comes the `<header>` element. This element represents a document
introduction, typically containing a site title, logo and other
introductory content. In our case, the `<header>` element is just what
we need, so let's put it in our HTML:

```html
<header>
  <h1>My cool website!</h1>
</header>
```

Much better. Now, screen readers and other software will know that the
text enclosed within `<header>` is the page header.

[^header-identification]: You may be asking: wouldn't the screen
    reader know that it's a header, since it contains an H1 element?
    However, the `<h1>` element isn't always found at the header of
    the site (it might only feature a logo or navigation bar). Thus,
    it is important to avoid ambiguity by using this element.

## The `<nav>` element

Let's move on to the next part of our website code.

```html
<div class="navigation">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>
```

First, let's mark the navigation container as, well, a navigation
container. HTML has the `<nav>` element just for that purpose. The
`<nav>` element is used to denote text with one or more links for
navigational purposes.

However, we're still not done with this section. Let's be more
specific and tell the reader that we have a list of links, using the
unordered list element (as opposed to just three unrelated
links). Although the rendered page won't look like it used
to,[^new-list-look] we can use simple CSS to style the list of links
back to their original layout. Remember: HTML is for structuring the
document, CSS is for styling it.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

[^new-list-look]: Each link will most likely have a bullet next to it
    and each link will be on a separate line. The exact styling is
    browser-dependent.

## Marking the main container

The next part of the document is a container with the class
`content`---the main container featuring most of the page's
text. Right now, the container is a `<div>`, meaning that it doesn't
tell us anything about the document structure. To make this part more
accessible, let's replace the `<div>` with a `<main>` element.

The `<main>` element represents the dominating content of the
page. The text within this element is typically unique between
different site pages, unlike the header and footer which typically
remain the same across multiple pages. Some readers implement a "skip
to content" feature which use the `<main>` element to know where the
main content is.

```html
<main>
...
</main>
```

## Creating a useful outline

Let's move on to the next part of the HTML document---the "Welcome to
my site" message:

```html
<h6>Welcome to my site</h6>
<p>This site is home to the infamous Cracker Cookie Jr.</p>
```

Here, the message is wrapped in an `<h6>`, although we know it's not
actually a heading. In this case the heading element was used to give
the welcome message a distinct size which we can do with CSS. Headings
should not be used simply to style content.

The general rule for headings is that the page title is an `<h1>`. The
rest of the headings should be a clear hierarchy. A sub-heading should
be exactly one less than the parent heading, so an `<h2>` would be the
sub-heading for an `<h1>`. This makes outlines generated by screen
readers and other assistive software much more helpful.

Here is the final HTML for this section. Notice how we added a class
so that we could later apply CSS styling:

```html
<p class="welcome">Welcome to my site</p>
<p>This site is home to the infamous Cracker Cookie Jr.</p>
```

## The `<section>` element

We've reached the main content of the page, composed of two distinct
sections:

```html
<div class="section">
  <h3>Cookies</h3>
  <p>I think cookies are delicious!</p>
</div>
  
<div class="section">
  <h3>Crackers</h3>
  <p>Crackers are nice, too!</p>
</div>
```

As you may have guessed by now, there is a more specific element that
can be used here. This is a common pattern. Always make sure to use
the more specific element that accurately portrays the structure of
the document. Elements can later be styled from their default looks
with the help of CSS, so rely on an element's meaning rather than
default look when creating an HTML document.

In this case, the element is `<section>`. The `<section>` element
represents a document section which typically has a heading. Based on
the heading rule we learned above, the subtitles should be adjusted to
`<h2>`, since they are both children of the main document titled by
the `<h1>` in the `<header>` at the top of the page.

```html
<section>
  <h2>Cookies</h2>
  <p>I think cookies are delicious!</p>
</section>

<section>
  <h2>Crackers</h2>
  <p>Crackers are nice, too!</p>
</section>
```

## The `<article>` element

Next come the page comments. Currently they're just `<div>` elements:


```html
<div class="comments">
  <div class="comment">
    <p>I love you Cracker!</p>
  </div>
</div>
```

First of all, let's replace the outer div with a `<section>`, since
the comment section is a distinct section of the document. We can also
add a "Comments" subtitle. This makes our page more accessible, since
users relying onassistive technology will know the purpose of the
section.

Next, we replace each comment with an `<article>`. This element
represents a self-contained piece of content that makes sense even if
it stands alone. We can also nest `<article>`s, although we won't do
that in this example.

```html
<section>
  <h2>Comments</h2>
  <article>
    <p>I love you Cracker!</p>
  </article>
</section>
```

## Fixing up the footer

The footer has two parts: the contact information and the "Have a nice
day!" message.

It is important to denote contact information, and it's done in HTML
using the `<address>` tag. This tag can be used for any contact
information, not just that of the author of the document.

The second part is the message. Here, it's marked as a heading, but it
clearly isn't one. This is bad practice because, as said above,
headings denote document structure. Styles can be applied later. We
can simply apply a class and write a stylesheet to set the font size
and weight.

The footer itself will be enclosed in a `<footer>` element, and
analogue to the `<header>` element, but typically found at the bottom
of the page and containing links, copyright and contact information.

The resulting HTML is:

```html
<footer>
  <address>
    <!-- We can add a mailto link so that the user is taken
         to their email application on click. -->
    <p>
      Contact me at
      <a href="mailto:cookie@example.com">cookie@example.com</a>
    </p>
  </address>
  <p class="positive-message">Have a nice day!</p>
</footer>
```

## A world full of meaning

This article took a brief look at some of the HTML elements that can
be used to make sites more accessible by adding meaning to the content
within them. With a simple example, we have discovered most of the
commonly used HTML elements that improve accessibility and make our web
pages more meaningful. Below is the final code for the example. See
[Further Reading](#further-reading) for a list of resources describing
web accessibility and the importance of using the correct elements in
HTML markup.

```html
<header>
  <h1>My cool website!</h1>
</header>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<main>
  <p class="welcome">Welcome to my site</p>
  <p>This site is home to the infamous Cracker Cookie Jr.</p>

  <section>
    <h2>Cookies</h2>
    <p>I think cookies are delicious!</p>
  </section>

  <section>
    <h2>Crackers</h2>
    <p>Crackers are nice, too!</p>
  </section>

  <section>
    <h2>Comments</h2>
    <article>
      <p>I love you Cracker!</p>
    </article>
  </section>
</main>

<footer>
  <address>
    <p>
      Contact me at
      <a href="mailto:cookie@example.com">cookie@example.com</a>
    </p>
  </address>
  <p class="positive-message">Have a nice day!</p>
</footer>
```

### Further reading

1. [HTML: A good basis for
   accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
   -- A great article on the topic of HTML accessibility
2. [HTML elements
   reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
   -- A reference for HTML tags, classified by category and
   alphabetically
3. [Accessibility](https://www.w3.org/standards/webdesign/accessibility.html)
   -- A page making the case for web accessibility and providing
   examples
4. [Introduction to Web Accessibility
   ](https://www.w3.org/WAI/fundamentals/accessibility-intro/) -- An
   introduction to web accessibility

Thanks for reading!

---
