https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers

##### Table of Contents

- [Functions](#functions)
- [Specificity](#specificity)
- [Inheritance](#inheritance)
- [Cascade layers](#cascade-layers)
  - [Layer creation and media queries](#layer-creation-and-media-queries)
- [The box mode](#the-box-mpdel)
  - [Outer display type](#outer-display-type)
  - [Inner display type](#inner-display-type)
  - [Parts of a box](#parts-of-a-box)
  - [The alternative CSS box model](#the-alternative-css-box-model)
  - [Using display: inline-block](#using-display-inline-block)
- [Backgrounds and borders](#backgrounds-and-borders)
  - [Controlling background-repeat](#controlling-background-repeat)
  - [Sizing the background image](#sizing-the-background-image)
  - [Positioning the background image](#positioning-the-background-image)
  - [Gradient backgrounds](#gradient-backgrounds)
  - [Multiple background images](#multiple-background-images)
  - [Background attachment](#background-attachment)
  - [Rounded corners](#rounded-corners)
- [Writing Modes](#writing-modes)
  - [Writing modes and block and inline layout](#writing-modes-and-block-and-inline-layout)
  - [Logical props that replaces height and width and other physical props](#logical-props-that-replaces-height-and-width-and-other-physical-props)

Later styles replace conflicting styles that appear earlier in the stylesheet. This is the cascade rule.

## Functions

width: calc(90% - 30px);

transform: rotate(0.8turn);

## Specificity

An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. Pseudo-element selectors have the same specificity as regular element selectors.

A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight. Attribute selectors and pseudo-classes have the same weight as a class.

**Id selector has more weight that class**

![image](https://github.com/manojake/javascript-playground/assets/68778250/219245d6-863e-4e12-bf67-497112b52cd8)

## Inheritance
 if you set a color and font-family on an element, every element inside it will also be styled with that color and font, unless you've applied different color and font values directly to them

 Controlling inheritance

CSS provides five special universal property values for controlling inheritance. Every CSS property accepts these values.

inherit

    Sets the property value applied to a selected element to be the same as that of its
    parent element. Effectively, this "turns on inheritance".
initial

    Sets the property value applied to a selected element to the initial value of
    that property.
revert

    Resets the property value applied to a selected element to the browser's
    default styling rather than the defaults applied to that property.
    This value acts like unset in many cases.
revert-layer

    Resets the property value applied to a selected element to the value established
    in a previous cascade layer.
unset

    Resets the property to its natural value, which means that if the property
    is naturally inherited it acts like inherit, otherwise it acts like initial.

## Cascade layers
- CSS cascade layers help manage the order in which styles are applied.
- Layers are defined using the @layer rule.
- Layers are applied in the order they are defined.

```
@layer site, page;

@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}
```

## Layer creation and media queries
```
@media (min-width: 50em) {
  @layer site;
}

@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}
```


# The box model

In the normal flow, By default, block-level elements (p, h) are laid out in the block flow direction.  Each element will appear on a new line below the last one, with each one separated by whatever margin that's been specified.

If two vertically adjacent elements both have a margin set on them and their margins touch, the larger of the two margins remains and the smaller one disappears. This is known as margin collapsing. Collapsing margins is only relevant in the vertical direction. 

Inline elements(div, span) behave differently. They don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing content will move down to a new line.

## Outer display type

This inline or block type will be be applied based on the elements that are being rendered( div or p).

If a box has an outer display type of block, then:

    The box will break onto a new line.
    The width and height properties are respected.
    Padding, margin and border will cause other elements to be pushed away from the box.
    If width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

if a box has an outer display type of inline, then:

    The box will not break onto a new line.
    The width and height properties will not apply.
    Top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
    Left and right padding, margins, and borders will apply and will cause other inline boxes to move away from the box.


## Inner display type
dictates how elements inside that box are laid out.

Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in normal flow and behave as block or inline boxes.

You can change the inner display type for example by setting display: flex;. The element will still use the outer display type block but this changes the inner display type to flex. Any direct children of this box will become flex items and behave according to the Flexbox specification.

## Parts of a box
![image](https://github.com/manojake/javascript-playground/assets/68778250/f45bef7b-82d4-4d62-ba58-d582ee077485)

In the below image the actual height/width would be height/weight + padding + border

![image](https://github.com/manojake/javascript-playground/assets/68778250/ad445dd6-200c-473d-be76-242a11de1c49)


## The alternative CSS box model
Any width is the width of the visible box on the page and no need to add up the border and padding to get the real size of the box.This is a popular choice among developers

To turn on the alternative model for an element, set box-sizing: border-box on it:

![image](https://github.com/manojake/javascript-playground/assets/68778250/8853aea7-b68d-440d-9839-15964fc71494)

## Using display: inline-block

display: inline-block is a special value of display, which provides a middle ground between inline and block. Use it if you do not want an item to break onto a new line, but do want it to respect width and height and avoid the overlapping seen above.

Where this can be useful is when you want to give a link a larger hit area by adding padding. <a> is an inline element like <span>; you can use display: inline-block to allow padding to be set on it, making it easier for a user to click the link.

You see this fairly frequently in navigation bars.

# Backgrounds and borders
If you specify a background color in addition to a background image then the image displays on top of the color.

## Controlling background-repeat
![image](https://github.com/manojake/javascript-playground/assets/68778250/4425ee84-a4e6-460e-a657-66f9ef6334e2)

## Sizing the background image
if the image is larger than the container, the image will be cropped. size can be used in this scenario

![image](https://github.com/manojake/javascript-playground/assets/68778250/0c7307a1-b720-40e2-9efe-c726f9ccb599)

## Positioning the background image
background-position is a shorthand for background-position-x and background-position-y, which allow you to set the different axis position values individually.

![image](https://github.com/manojake/javascript-playground/assets/68778250/ac253573-a631-4d71-a979-f248649753c8)

## Gradient backgrounds
A fun way to play with gradients is to use one of the many CSS Gradient Generators available on the web, such as https://cssgradient.io/

![image](https://github.com/manojake/javascript-playground/assets/68778250/a43fb9a3-f604-4a75-b18f-0f4798187494)

## Multiple background images
multiple background-image values can be specified in a single property value, separating each one with a comma. When you do this you may end up with background images overlapping each other. 

*Note: Gradients can be happily mixed with regular background images.*

![image](https://github.com/manojake/javascript-playground/assets/68778250/03511431-7ee1-43de-85c5-e474aedb6a8f)

Each value of the different properties will match up to the values in the same position in the other properties. The smaller numbers of values will cycle

![image](https://github.com/manojake/javascript-playground/assets/68778250/71b1b296-0294-4200-8ee3-4ff0e3b7edb4)

## Background attachment
Another option we have available for backgrounds is specifying how they scroll when the content scrolls. This is controlled using the background-attachment property,

https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html

https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds

## Rounded corners
Rounding corners on a box is achieved by using the border-radius property

# Writing Modes
The three possible values for the writing-mode property are:
  horizontal-tb: Top-to-bottom block flow direction. Sentences run horizontally.
  vertical-rl: Right-to-left block flow direction. Sentences run vertically.
  vertical-lr: Left-to-right block flow direction. Sentences run vertically.

## Writing modes and block and inline layout
  Block and inline is tied to the writing mode of the document, and not the physical screen.

  Blocks are only displayed from the top to the bottom of the page if you are using a writing mode that displays text horizontally, such as English.

In the below example, the Paragraph and Header are stacked based on the horizontal and vertical writing mode.

In a nutshell, __block dimension__ is always the direction blocks are displayed on the page in the writing mode in use. The __inline dimension__ is always the direction a sentence flows.

![image](https://github.com/manojake/javascript-playground/assets/68778250/70a22c35-132b-4220-98b2-ed2abb80fca8)

## Logical props that replaces height and width and other physical props
In the below example the width and height have to to be swapped in order for the two sections to fit the content properly. To get past this difficulty, CSS has come up with new properties __inline-size__ and __block-size__

The inline-size will set the size of the element based on the text flow direction. ie the writing mode. block-size will set the size based on the how the block grows, 

![image](https://github.com/manojake/javascript-playground/assets/68778250/a90f39b0-71d4-4901-9346-cd1cda31ecb2)

The __margin-top__ property is mapped to __margin-block-start__ — this will always refer to the margin at the start of the block dimension.

The __padding-left__ property maps to __padding-inline-start__, the padding that is applied to the start of the inline direction.

see the full set of mappings [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
