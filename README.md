# TableTopClient 


# Todos

## Navigation

- [ ] Overall Layout
- [ ] Navigation to Skill Groups is currently broken

## Character Details

- [ ] Display Money
- [x] Display Level

## Inventory

- [x] show which skill group a weapon needs

### Display of Experience Points

- [x] Show experience points
- [x] Styling
- [x] Consider mobile view
- [x] How to add experience points?



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