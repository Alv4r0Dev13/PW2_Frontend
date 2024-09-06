import React, { useState } from 'react';

function CommentSection() {
  const [comment, setComment] = useState('');

  function handleSubmit() {
    return;
  }

  return (
    <div>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Digite seu comentário aqui..."
        style={{ width: '100%' }}
      />
      <button type="button" onClick={handleSubmit}>
        Enviar Comentário
      </button>
    </div>
  );
}

export default CommentSection;
