import _ from 'lodash'
import j from 'jquery'

function component() {
    // let element = document.createElement('div')
    // element.innerHTML = _.join(['Helloaaaaa','webpack'],' ')
    // return element

    var element = j('<div><div>')
    element.html(_.join(['Hello','webpack'],' '))
    return element.get(0)
}
document.body.appendChild(component())