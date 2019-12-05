# Hype CommandPipeline

![Hype-commandPipeline|690x487](https://playground.maxziebell.de/Hype/CommandPipeline/HypeCommandPipeline.png) 

---

<img src='https://forums.tumult.com//uploads/db2156/original/2X/1/19f684bf0e0ab570320fa8a2a4bde62dff4e2f2c.jpeg'>

As I saw this approach used in simpler ways on the forum. The idea behind it is that one maps different function calls originating by triggering custom behavior onto the same `handler` function and then uses `event.customBehaviorName` to run an action.

This allows you to call functions in the hypeDocument scope using the timeline or actions panel without wrapping them in a Hype function first. This is specially useful for commands that trigger stuff from the timeline as you don’t have to create all these hype function wrappers for slight differences in parameters. Triggering the command ...
```
myFunction|"I am a string", 1
```
... will call the function **hypeDocument.myFunction("I am a string", 1);**. Although for this example to run properly  you would need to define that function first like…

```
hypeDocument.myFunction = function(message, nr){
    console.log("HypeCommandPipeline:", message, nr);
}
```
You can call built in functions but mostly that doesn't make sense as they are already offered in the dropdowns in Hype. Then there are limits in the complexity of arguments as we can't pass in more then simple objects (so no HTMLDivElement etc.). But at least they can be nested, so the arguments go beyond only strings, as the custom behavior name is actually parsed on the basis of JSON. So you can do this…
```
myFunction|"I am a string", 1, { "hello": [1,2,3,4,5,6] }
```

### Versionhistory
`1.0 (Beta) Initial release under MIT-license`\
`1.1 Fixed error handling and now the errors are detailed`\
`1.2 Fixed pipeline and made parsing more robust`\
`1.3 Converted into a self contained extension`
