import React, { useEffect } from 'react'
import { DashboardComponent } from 'components'
import { useSelector } from 'react-redux'
import { type RootState } from 'store'
import { useNavigate } from 'react-router-dom'
import { PATHS } from 'utils/consts'

export const DashboardContainer: React.FC = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate()

  const { boards, categories } = useSelector((root: RootState) => root.tickets)
  useEffect(() => {
    if (boards.length === 0 || categories.length === 0) {
      navigate(PATHS.CREATEBOARD)
    }
  }, [])

  return (
    <div>
      <DashboardComponent />
    </div>
  )
}
