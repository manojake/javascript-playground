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
- [Overflowing content](#overflowing-content)
  - [The overflow property](#the-overflow-property)
- [CSS values and units](#css-values-and-units)
  - [ems and rems](#ems-and-rems)
  - [Percentages](#percentages)
- [Sizing items in CSS](#sizing-items-in-css)
  - [Min and max sizes](#min-and-max-sizes)
  - [Viewport units](#viewport-units)
- [Images, media, and form elements](#images-media-and-form-elements)
  - [Sizing images](#sizing-images)
- [Styling tables](#styling-tables)
- [CSS layout](#css-layout)
  - [Flexbox](#flexbox)
    - [Horizontal and vertical alignment](#horizontal-and-vertical-alignment)
  - [Grids](#grids)
    - [Flexible grids with the fr unit](#flexible-grids-with-the-fr-unit)
    - [Gaps between tracks](#gaps-between-tracks)
    - [Repeating track listings](#repeating-track-listings)
    - [The minmax() function](#the-minmax()-function)
    - [Useful Grid pattern](#useful-grid-pattern)
    - [Line based placement](#line-based-placement)
- [Floats](#floats)
- [Positioning](#positioning)
  - [Relative](#relative)
  - [Absolute](absolute)
- [Multiple column layout](#Multiple-column-layout)
  - [Styling the columns](#styling-the-columns)
  - [Spanning columns](#spanning-columns)
- [Responsive design](#responsive-design)
  - [The viewport meta tag](#the-viewport-meta-tag)

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

Inline elements(span) behave differently. They don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing content will move down to a new line.

_Note: div is a block level element_

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

 You can float an image left to cause text to wrap round the image. You could replace left with inline-start
__float: inline-start__

# Overflowing content
Overflow is what happens when there is too much content to fit in an element box.

## The overflow property
he default value of the __<overflow>__ value type is __visible__. With this default setting, one can __see content__ when it overflows.

To crop content when it overflows, you can set __overflow: hidden__. 

__Using overflow: scroll__, browsers with visible scrollbars will __always display them__ even if there is not enough content to overflow.

__To just scroll on the y axis__, you could use the overflow-y property, setting __overflow-y: scroll__.

Although you can set __overflow-x__ to scroll on x axis, its not recommended. consider using the _word-break_ or _overflow-wrap_ property

![image](https://github.com/manojake/javascript-playground/assets/68778250/971a5c52-c5f6-4816-9f67-de1f0de93574)

If you only want scrollbars to appear when there is more content than can fit in the box, use __overflow: auto__.

# CSS values and units
AbsoluteUnits: _px_

Relative units: _em_ and _rem_: relative to the font size of the parent element and the root element, respectively.

_vh_ and _vw_: relative to the viewport's height and width, respectively

## ems and rems
__the em unit means "my parent element's font-size"__ in the case of typography. So each successive level of nesting gets progressively larger

On the other hand, __the rem unit means "The root element's font-size" (rem stands for "root em")__

## Percentages
 The percentages is set relative to the parent elemnt's property value.

 For example, if you set an element's font-size as a percentage, it will be a percentage of the font-size of the element's parent. If you use a percentage for a width value, it will be a percentage of the width of the parent.

 Note: When you use __margin and padding set in percentages__, the value is calculated from the inline size of the containing block — therefore the __width__ when working in a horizontal language.

# Sizing items in CSS

## Min and max sizes

If you have a box that might contain a variable amount of content, and you always want it to be at least a certain height, you could set the min-height property on it.

The use of _max-width_ can be explained with an example. Sippose the container div has 200 px width. But the image with it has only 100px intrinsic (original width). If the width of the image is set to 100%, the image will be scaled up to 2oopx since % always relative to the parent container. But if _max-width_ is used instead, the image will grow only to it's intrinsic width. Not beyond that.

## Viewport units
1vh is equal to 1% of the viewport height, and 1vw is equal to 1% of the viewport width. ie the browser tab height and width.

A usecase of this wouyld be, if you want a full-page hero section to show before the rest of your content, making that part of your page 100vh high will push the rest of the content below the viewport, meaning that it will only appear once the document is scrolled.

# Images, media, and form elements

## Sizing images
_max-width: 100%_ property can be used for the image, so that the image will not expand if the container box is greater that the image's intrinsic height and width. It will also do not over flow and will be fit in the container by keeping the aspect ratio if the image dimension is greater than the container.

Here _width:100%_ can't be used since _%_ will be the percentage value of the element's parent container. Hence the image will take the full width of the container and if the image is smaller, it will stretch

_object-fit_ can be used here as well and it is similar to _background-size_ property of a back ground image. _cover_ value can be used, which sizes the image down, maintaining the aspect ratio so that it neatly fills the box. As the aspect ratio is maintained, some parts of the image will be cropped by the box.

_contain_ as a value, the image will be scaled down until it is small enough to fit inside the box. This will result in "letterboxing" if it is not the same aspect ratio as the box.

You could also try the value of _fill_, which will fill the box but not maintain the aspect ratio.

_note: Images and videos will not stretch to contain in the grid unlike background-colour. Image's default behaviour is different when used in layout like grid and flex. It will have to be given height and width 100% which will stretch the image.

# Styling tables

SHould expolre more in [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)

# CSS layout
Dispaly _inline_ and _block_ has already been discussed. The two other possible values are _flexbox_ and _grid_

## Flexbox
This is a one dimentional layout, to arrange child items in a row or column. Below are the main terms that is used in flexbox


    The main axis is the axis running in the direction the flex items are laid out in.
    The start and end of this axis are called the main start and main end. 
    The length from the main-start edge to the main-end edge is the main size.
    
    The cross axis is the axis running perpendicular to the direction the flex items are laid out in. 
    The start and end of this axis are called the cross start and cross end.
    The length from the cross-start edge to the cross-end edge is the cross size.
    
    The parent elemnt is called flex container
    
    The child elements are called flex items

When _flex_ is set, below initial values are set by default

_flex-direction: row_

![image](https://github.com/manojake/javascript-playground/assets/68778250/91b52152-684f-4abd-91ee-528798712220)

_align-items: stretch_ This means that the items stretch to the height of the flex container, which in this case is defined by the tallest item.

For instance when _flex-direction_ is set to row and there are too many items in the container, we could use the property _flex-wrap: wrap_ to nicely wrap
the items to the next row when there is not enoguh space. It's useful to note that _flex: 200px_ will give each column 200px of width. But if any of the row
has more width, that width will be equally distrubuted to the items. ie items could have more than 200px width. But all the items will have equal width in a row

Itmes that are taking more width in the second row because of lack of elemnts can be fixed by giving a _max-width_ value. 

so in effect the below values will wrap the items and items will have equal width

    flex-container-class: {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
    
    flex-item: {
      flex: 1 200px
      max-width: 200px
    }

_flex: 1_ is a unitless proportion value that dictates how much available space along the main axis each flex item will take up compared to other flex items.

![image](https://github.com/manojake/javascript-playground/assets/68778250/fea84665-af31-45e9-b54d-a4f78ac0436a)

The following rule could be added to give specific size for the 3rd item

![image](https://github.com/manojake/javascript-playground/assets/68778250/633e79e8-6c32-492c-ac92-1a94e3890f5a)


The shorthand for _flex-direction_ and _flex-wrap_ would be 

![image](https://github.com/manojake/javascript-playground/assets/68778250/e0b5927a-7ad5-4856-9cc8-fbf908bf6b29)

### Horizontal and vertical alignment
_align-items_ can be used to align flex items. By defaukt it's value is _normal_. ie the items will be stretched in the direction of the cross axis. ie if the _flex-direction is row_ the items will be stretched vertically to fill the parent container. But if the _center_ value is used, the items will not be stretched beyond it's intrinsic width and height.The flex items are positioned at the center of the cross-axis. The flex items are spaced evenly along the main-axis by setting the _justify-content_ property to _space-around_.

You can override the align-items behavior for individual flex items by applying the _align-self_ property to them.

## Grids

Grid layout is a two-dimensional layout system for the web. It lets you organize content into rows and columns.

_display: grid_ gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.

### Flexible grids with the fr unit

_grid-template-columns: 200px 200px 200px;_ will arrange the inline items into three columns. If you use _1fr_ the space will be equally distributed to all the columns.

![image](https://github.com/manojake/javascript-playground/assets/68778250/2eb1f764-b026-4ceb-b806-c5eea3b18b6b)

### Gaps between tracks

![image](https://github.com/manojake/javascript-playground/assets/68778250/ec4d1874-9e7c-4c1b-9c8e-2af5f14993af)

_Note: In the above code the row size is not defined. Hence rows are auto sized. That's why this grid is called implicit grid. If you wish to give row size or a height for each cell in this case, you could give grid-auto-rows: 100px;. Then each grid cell will have a height of 100px. This setup is called explicit grid._

![image](https://github.com/manojake/javascript-playground/assets/68778250/1b08dfa5-24bf-4725-8ac5-2fdb2227b0be)

### Repeating track listings

![image](https://github.com/manojake/javascript-playground/assets/68778250/c5bd2078-af4d-4d6d-99a2-cc0456c3530f)

### The minmax() function

_grid-auto-rows: minmax(200px, auto);_ could be set to give a minimum height fro the rows and the max-height will be auto for the rows

### Useful Grid pattern

_grid-template-columns: repeat(auto-fit, minmax(200px,1fr));_ will try to fit as many columns in a row which has a minimum width of 200px sharing whatever space is leftover among all the columns. The maximum is 1fr which, as we already know, distributes space evenly between tracks.

### Line-based placement

You can also specify which ines the elemnts should be placed. For nstance the below style will make the headrr span from column 1 to column 3 in grid row 1.

    header {
      grid-column: 1 / 3;
      grid-row: 1;
    }
More cleaner way to implement this is tp use [grid-template-areas](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#positioning_with_grid-template-areas)

# Floats
When _float:left_ is added to an element, it wil be taken out of the normal flow and stuck to the left of the parent element. Any content that would come below the floated element in the normal layout flow will now wrap around it instead, filling up the space to the right-hand side of it as far up as the top of the floated element. There, it will stop.

![image](https://github.com/manojake/javascript-playground/assets/68778250/62fa5013-9d7c-4c4a-981e-91c3873c69f0)

In order to clear any following element to wrap around the floated elemnt, add _clear: left_ property.

_Note: Even if you put the floated div and the following wrapping elemnt in a parent div, the elemnt follwing the parent div would still wrap around the floated div. 
[Block formatting context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) can be used to deal with this. When **display: flow-root** from Block formatting context is applied to the wrapped div, the elemnts following the wrapped div would n't wrap aound the floated div. This exists only to create a BFC without using hacks — there will be no unintended consequences when you use it.

## Relative

Once the elemnt is placed in the normal flow, then the final poistion can be defined used top, lef, bottom and right props

## Absolute

Absolutely positioned element will be contained in the initial containing block. ie be positioned relative to the initial viewport. But if you wanna make it relative to any of the parent elemnts, give the parent elemnt _position: relative_, then the absolutely positioned elemnt will be placed relative to that parent. you can't position it relative to an element it's not nested inside of

# Multiple column layout

The multiple-column layout specification provides you with a method for laying content out in columns, as you might see in a newspaper.

When _column-count: 3;_ is used on the container, the child elemnts are laid out in three columns. You could give it a flexible width by specifying a max-width. A specific width could also be defined using _ column-width: 200px;_.

## Styling the columns

![image](https://github.com/manojake/javascript-playground/assets/68778250/a7863329-9c2a-42b5-8b0b-8c99701ee4a0)

## Spanning columns

To cause an element to span all the columns, specify the value of all for the column-span property.

![image](https://github.com/manojake/javascript-playground/assets/68778250/50acb31a-51c1-43d3-8bf5-baebaefba4ab)

# Responsive design

If using breakpoints, best practices encourage defining media query breakpoints with [relative units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) rather than absolute sizes of an individual device.

When you zoom in or out in a browser, the entire page is scaled, including the base font size of the <html> element. Hence if _rem_ unit is used as a font size unit, the texts will scale with the browser zoom settings. The default html elemnt font size is 16px. 

Refer: https://stackoverflow.com/questions/28988445/css-62-5-why-do-developers-use-it

![image](https://github.com/manojake/javascript-playground/assets/68778250/442f2b12-e58e-411b-861a-4ce79347a797)


## The viewport meta tag

when smartphones first arrived, most sites were not mobile optimized. The mobile browser would, therefore, set the viewport width to 980 pixels, render the page at that width, and show the result as a zoomed-out version of the desktop layout. Users could zoom in and pan around the website to view the bits they were interested in, but it looked bad.

By setting _width=device-width_ you are overriding a mobile device's default, like Apple's default width=980px, with the actual width of the device. Without it, your responsive design with breakpoints and media queries may not work as intended on mobile browsers.

![image](https://github.com/manojake/javascript-playground/assets/68778250/6a9bef63-b9a0-4009-b708-ff4f7ac3fcef)
