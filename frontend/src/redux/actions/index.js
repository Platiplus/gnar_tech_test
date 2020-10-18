import axios from '../../configuration/axios'

export const ActionTypes = {
  SET_UPLOAD_FILE: 'SET_UPLOAD_FILE',
  SET_UPLOAD_PROGRESS: 'SET_UPLOAD_PROGRESS',
  SUCCESS_UPLOAD_FILE: 'SUCCESS_UPLOAD_FILE',
  FAILURE_UPLOAD_FILE: 'FAILURE_UPLOAD_FILE',
}

export const setUploadFile = data => ({
  type: ActionTypes.SET_UPLOAD_FILE,
  payload: data,
})

export const setUploadProgress = (id, progress) => ({
  type: ActionTypes.SET_UPLOAD_PROGRESS,
  payload: {
    id,
    progress,
  },
})

export const successUploadFile = id => ({
  type: ActionTypes.SUCCESS_UPLOAD_FILE,
  payload: id,
})

export const failureUploadFile = id => ({
  type: ActionTypes.FAILURE_UPLOAD_FILE,
  payload: id,
})

export const uploadFile = files => dispatch => {
  if (files.length) {
    files.forEach(async file => {
      const formPayload = new FormData()
      formPayload.append('file', file.file)
      formPayload.append('name', file.file.fileName)
      try {
        await axios({
          url: 'uploads/',
          method: 'post',
          data: formPayload,
          onUploadProgress: progress => {
            const { loaded, total } = progress
            const percentageProgress = Math.floor((loaded/total) * 100)
            dispatch(setUploadProgress(file.id, percentageProgress))
          },
        })
        dispatch(successUploadFile(file.id))
      } catch (error) {
        dispatch(failureUploadFile(file.id))
      }
    })
  }
}