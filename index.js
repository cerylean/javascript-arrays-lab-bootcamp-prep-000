const app = "I don't do much."

function destructivelyPrependKitten(name) {return kittens.unshift(name)}

function destructivelyAppendKitten(name) {return kittens.push(name)}

function destructivelyRemoveFirstKitten() {return kittens.shift()}

function destructivelyRemoveLastKitten() {return kittens.pop()}

function appendKitten(name) {newKittens=[name,...kittens]; return newKittens}
