
# Later styles replace conflicting styles that appear earlier in the stylesheet. This is the cascade rule.

## Functions

width: calc(90% - 30px);

transform: rotate(0.8turn);

## Specificity

An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. Pseudo-element selectors have the same specificity as regular element selectors.

A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight. Attribute selectors and pseudo-classes have the same weight as a class.

