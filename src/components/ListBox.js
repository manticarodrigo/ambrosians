import React, { useRef } from 'react'
import { useListBox, useListBoxSection, useOption } from 'react-aria'
import { CheckIcon } from '@heroicons/react/solid'

const ListBox = props => {
  const ref = useRef(null)
  const { listBoxRef = ref, state } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="max-h-72 overflow-auto outline-none">
      {[...state.collection].map(item =>
        item.type === 'section' ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  )
}

const ListBoxSection = ({ section, state }) => {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  })

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span
            {...headingProps}
            className="text-xs font-bold uppercase text-gray-500 mx-3">
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map(node => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  )
}

const Option = ({ item, state }) => {
  const ref = useRef(null)
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key
    },
    state,
    ref
  )

  let text = 'text-gray-700'
  if (isFocused || isSelected) {
    text = 'text-blue-600'
  } else if (isDisabled) {
    text = 'text-gray-200'
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={`m-1 rounded py-2 px-2 text-sm outline-none cursor-default flex items-center justify-between ${text} ${
        isFocused ? 'bg-blue-100' : ''
      } ${isSelected ? 'font-bold' : ''}`}>
      {item.rendered}
      {isSelected && (
        <CheckIcon aria-hidden="true" className="w-5 h-5 text-blue-600" />
      )}
    </li>
  )
}

export default ListBox
