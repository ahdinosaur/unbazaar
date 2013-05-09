# unbazaar

!SLIDE

# unbazaar

an unhosted marketplace for local production

!SLIDE

# 1. introduction

!SLIDE

# unbazaar is a

- peer-to-peer
- open source
- currency agnostic

## marketplace

!SLIDE left

# p2p
## http://unhosted.org

- we offer client-side web app
  - each user runs web app in browser
- web app uses per-user data storage
  - each user hosts own data 
- web app naturally scales with users at no additional cost
  - p2p network of browser-side apps with self-hosted per-user data

!SLIDE left

# open source

- paradigm shift for development
  - http://www.catb.org/esr/writings/homesteading/
- unbazaar targets early open source economy
  - http://opensourceecology.org/wiki/Open_Source_Ecology_Paradigm
- our software licensed under AGPL (copyleft)

!SLIDE left

# currency-agnostic

- https://payswarm.com/

!SLIDE left

# ecosystem of marketplace

- supports http://opensourceecology.org/wiki/Open_Source_Ecology_Paradigm
- source nodes are producers
- sink nodes are consumers
- other nodes are third-party intermediaries
   - distributers, vendors, ...
- anyone can fulfill any role within the marketplace

TODO: make visual graph

!SLIDE

# 2. initial target market

!SLIDE left

# consider
## this set of production equipment

- paper printers
- 3d printer
- laser cutters 
- cnc machines

!SLIDE left

# historically

- expensive and closed source
- required significant investment
- only used for large-scale manufacturing
- small number of production factories

!SLIDE left

# now

- cheap and open source
- within reach of everday consumers
- large number of production microfactories

!SLIDE left

# existing communities 
## early producers (adopters)

- hackerspaces
  - most have production equipment
    - 3d printers > laser cutters > cnc machines
  - http://hackerspaces.org/wiki/List_of_Hacker_Spaces
- members of hackerspaces
  - comfortable with bleeding edge systems (willing to go beyond status quo)
  - many have production equipment
  - many have already contributed to open source

!SLIDE left

# currently
## producer equipment within budget

- paper printing
  - bundled with expensive ink deals
  - right now usually closed source, so could be cheaper
- 3d printing
  - http://www.reprap.org/wiki/RepRap_Options#Models
  - http://www.makexyz.com/
- laser cutters
  - http://labs.nortd.com/lasersaur/
- cnc machines
  - http://www.shapeoko.com/

!SLIDE left

# yet after purchasing,
## this equipment is idle
- aside from occasional projects, most equipment spends most time idle
- huge loss of equipment potential

!SLIDE left

# meanwhile
## high consumer demand

- paper printing
  - copy centers
- 3d printed parts
  - http://www.shapeways.com/
  - http://www.thingiverse.com/ 
- furniture
- art

!SLIDE left

# the goal of unbazaar
## connect consumers with local producers

- producers list equipment
  - equipment does bulk of work
  - helps repay initial equpiment cost
- consumers find equipment
  - less distance for shipping
  - competitive with existing prices
  - supports local business

!SLIDE left

# 3. technical overview

!SLIDE left

# components of unbazaar

- remoteStorage => per-user data
  - http://remotestorage.io/
- Web Keys => identity
  - https://payswarm.com/specs/source/web-keys
- Web Payments => currency exchange
  - https://payswarm.com/specs/source/web-payments
- Web Commerce => asset listings
  - https://payswarm.com/specs/source/web-commerce
- sockethub => social media
  - http://sockethub.org/
- Payment Intents => crowdfunding
  - https://payswarm.com/specs/source/payment-intents

!SLIDE left

# 4. roadmap (fibonacci steps)

!SLIDE left

# one

- clone makexyz listings with unhosted remoteStorage
- unhost user tools (Web Commerce asset)
- make index that searches users by location, tool
- bounties:
  - https://groups.google.com/forum/?fromgroups=#!topic/unhosted/SpB_i6md0Ro

!SLIDE left

# two

- add payments
- milestones:
  - unhost listings (Web Commerce listings)

!SLIDE left

# three

- add other tools

!SLIDE left

# five

- add bill of materials
- milestones:
  - unhost resources (Web Commerce asset)

!SLIDE left

# eight

- add assembly services
- milestones:
  - unhost user recipes (Web Commerce asset)
  - make index that searches users by location, recipe

!SLIDE left

# unstaged

- add sponsorship for designs
- add editor for designs
- add delivery services