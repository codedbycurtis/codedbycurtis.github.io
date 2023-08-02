import { Link } from 'gatsby'
import { styled } from 'styled-components'

const StyledLink = styled(Link)`
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background-color: crimson;
        transition: 500ms;
    }

    &:hover::after {
        width: 100%;
    }

    &.active::after {
        width: 100%;
    }
`

export default StyledLink