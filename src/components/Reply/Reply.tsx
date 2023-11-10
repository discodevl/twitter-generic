import React from 'react'
import { CommentType } from '../../model/interfaces'

type ReplyProps = {
    reply: CommentType
}

function Reply({reply}: ReplyProps) {
  return (
    <div>Reply</div>
  )
}

export default Reply