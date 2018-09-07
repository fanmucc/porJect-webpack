import _ from 'lodash'
import j from 'jquery'
import foo from './foo'

function component() {
    // let element = document.createElement('div')
    // element.innerHTML = _.join(['Helloaaaaa','webpack'],' ')
    // return element

    var element = j('<div></div>')
    element.html(_.join(['Hiaaa22aa','webpack'],' '))
    return element.get(0)
    
}

document.body.appendChild(component())

console.log('1')
console.log(foo)
console.log(foo())