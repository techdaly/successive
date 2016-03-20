import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TestComponent from './Test.jsx'

main()

function main () {

  console.log('whee!')

let exitem = document.getElementById('existing-successives')
  ReactDOM.render(<TestComponent testVal="look, test values!" />, exitem)

/*  ReactDOM.render(<SearchBar 
                  searchType={parsedQuery['rev-field']} 
                  q={parsedQuery.q} />, searchBar) */
}
