
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

    Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on inheritance".
initial

    Sets the property value applied to a selected element to the initial value of that property.
revert

    Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that property. This value acts like unset in many cases.
revert-layer

    Resets the property value applied to a selected element to the value established in a previous cascade layer.
unset

    Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts like initial.

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

**Outer display type**

    The box will break onto a new line.
    The width and height properties are respected.
    Padding, margin and border will cause other elements to be pushed away from the box.
    If width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

