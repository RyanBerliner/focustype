# focustype 
tl;dr better looking, intentionally designed focus states for accessible websites

This is focustype. It provides useful data attributes to isolate focus events based on their origins, using long and complicated javascript event handlers (kidding). It's very short and simple.

Every browser seems to focus elements under different circumstances. Don't believe me? Go click [these bootstrap buttons](https://getbootstrap.com/docs/4.3/components/buttons/) in different browsers and you'll see how the focus state shows in some browsers but not others. This is because the visual focus state uses the `:focus` selector, but different browsers focus the element differently on clicking, or tabbing through. This very small javascript solution give you insights into how an element received focus, so you can make the behavior look the same between all browsers under the exact scenarios you wish.

## Why Would You Need This?

Focus states are an important part of letting users know what part of your web page currently has focus. This is the case for almost all users of the web (even if you don't realize it), and even more so for those who navigate the web entirely by keyboard, jumping from element to element. Hopefully, you care about how your websites elements look for all users, and focustype helps you dial in your design under all circumstances. For mouse users, and keyboard users.