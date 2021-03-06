import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import FieldFeedback from '.'

const requiredProps = () => ({
  children: 'Example text'
})

describe('Component: FieldFeedback', function () {
  test('should return errors if invalid default props passed', function () {
    const actual = validatePropTypes(FieldFeedback.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(FieldFeedback.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldFeedback {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldFeedback')
  })

  test('should output additional className when `status` prop passed', function () {
    const wrapper = shallow(
      <FieldFeedback {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('className')).toEqual('FieldFeedback success')
  })
})
