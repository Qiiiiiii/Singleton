"use strict"

class Singleton{
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  getName() {
    console.log(this.name);
  }

  static getInstance(name) {
    if(!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}

  let a = Singleton.getInstance('sven1');
  let b = Singleton.getInstance('sven2');
  a.getName();
  b.getName();
