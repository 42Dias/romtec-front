import * as S from './Reports.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'

export function Reports () {
  return (
    <>
      <Sidebar />
      <Navbar />

      <S.ContainerConfirmation>
        <h2>Relatórios</h2>
      </S.ContainerConfirmation>
    </>
  )
}
