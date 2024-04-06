import classes from './index.module.css'
import { ReactComponent as LoadingIcon } from 'src/images/svg/loading.svg'

export const Loading = () => {
  return (
    <div className={classes.loading}>
      <LoadingIcon />
    </div>
  )
}
