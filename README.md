# focustype 

**tl;dr** better looking, intentionally designed focus states for accessible websites

See it in action at [https://ryanberliner.com/focustype/](https://ryanberliner.com/focustype/)

This is focustype. It provides useful data attributes to isolate focus events based on their origins, using long and complicated javascript event handlers (kidding). It's very short and simple.

Every browser seems to focus elements under different circumstances. Don't believe me? Go click [these bootstrap buttons](https://getbootstrap.com/docs/4.3/components/buttons/) in different browsers and you'll see how the focus state shows in some browsers but not others. This is because the visual focus state uses the `:focus` selector, but different browsers focus the element differently on clicking, or tabbing through. This very small javascript solution give you insights into how an element received focus, so you can make the behavior look the same between all browsers under the exact scenarios you wish.

## Why Would You Need This?

Focus states are an important part of letting users know what part of your web page currently has focus. This is the case for almost all users of the web (even if you don't realize it), and even more so for those who navigate the web entirely by keyboard, jumping from element to element. You likely care about how your websites elements look for all users, and focustype helps you dial in your design under all circumstances. For mouse users, and keyboard users.

## Problems and Notes

### Mixins 

If you are using scss you may find the following mixins helpful.

```
@mixin key-only-focus {
  &[data-focustype="key"]:focus {
    @content;
  }
}

@mixin mouse-only-focus {
  &[data-focustype="mouse"] {
    @content;
  }
}
```

### What if the client doesn't have javascript enabled?

Styles should be written such that the usability isn't dependent on javascript. focustype adds a class to the body `focustype-loaded` when it is loaded. You can use this to your advantage.

### Form Inputs

I'd personally avoid using key only or mouse only focus styling on certain form inputs. In my opinion many users will start to fill out a form by clicking in, then tabbing through parts, then clicking again. It could be confusing to the user if elements have different looks.

### Testing

I've tested this in Chrome, Safari, Firefox on a Mac..... so if you are hoping for a solid solution make sure you test this stuff further. There are no guarantees of this working in all sceneries. LMK if you 
find issues.
