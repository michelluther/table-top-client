# TableTopClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.



# Todos

## Navigation

- [ ] Overall Layout
- [ ] Navigation to Skill Groups is currently broken

## Character Details

### Display of Experience Points

- [x] Show experience points
- [ ] Styling
- [ ] Consider mobile view
- [ ] How to add experience points?



## fight display
  
- [ ] how to manage initiative
- [ ] how to show combatants?
  - [ ] friends and
  - [ ] foes
- [ ] how to add combatants?
  - [ ] adventure management needed? 


# Done 
- make magic available:
    - domain objects (Spell, ActualSpell, SpellService)
- Read all available skills and mix them with the skills available for a character
- Master view
    - Send images 
- image viewer remote controlled
    + create a new websocket connection
        * can this be done via a new path? Certainly it can in the client via `new WebSocket(ws://...:.../remoteControl);`
        * But what about the django app?
    + display
    + hide