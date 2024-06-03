
## Later styles replace conflicting styles that appear earlier in the stylesheet. This is the cascade rule.

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


# The alternative CSS box model
Any width is the width of the visible box on the page and no need to add up the border and padding to get the real size of the box.This is a popular choice among developers

To turn on the alternative model for an element, set box-sizing: border-box on it:
![image](https://github.com/manojake/javascript-playground/assets/68778250/8853aea7-b68d-440d-9839-15964fc71494)
