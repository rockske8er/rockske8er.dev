import { HeaderContainer } from './styles'

import brand from '@assets/brand-white.svg'
import Image from 'next/image'
export function Header() {
  return (
    <HeaderContainer>
      <Image src={brand} />
    </HeaderContainer>
  )
}
