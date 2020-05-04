---
title: Test
subtitle: Yes, another test (I'm sorry)
author: Ben
tags:
- tag1
- tag2
- tag3
categories:
- cat1
- cat2
- cat3
---

So this is a blog post. More specifically this is a blog post to test the design of this Hexo theme I am designing. It is called nebula (becauase space is cool, and my name backwards is ```neb```,
so that's cool. My name is Ben).

<!-- more -->

# yo 
## just
### testing
#### sean
##### hannity

# Look here
I wrote some code

## Some java also
``` java HelloWorld.java https://github.com/helloworld.java github.com/hello-world
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world"); // say "Hello, world"
    }
}
```

## this is a another code snippet, this time javascript
Here is how I added copy functionality to these code snippets
```javascript copy.js
function copy(pos) {
    // create a hidden text area to insert our text into
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // insert the text from the codeblock we want to copy into the textarea
    textarea.value = highlightedBlocks[pos].querySelector("td.code").innerText;
    // copy
    textarea.select();
    document.execCommand("COPY");
    // remove
    document.body.removeChild(textarea);
}
```

## Here is a block quote
{% blockquote Sean Hannity https://sean.hannity Sean.Hannity %}
Sean Hannity promotes far right ideals.
{% endblockquote %}

## Here is ...
All the features this blog has
1. comments
2. highlighted code
3. copy code to clipboard