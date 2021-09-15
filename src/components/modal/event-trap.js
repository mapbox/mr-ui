import React from 'react';
import PropTypes from 'prop-types';

const trap = (e) => e.stopPropagation();

function EventTrap({ children }) {
  return (
    <div
      onClick={trap}
      onContextMenu={trap}
      onDoubleClick={trap}
      onDrag={trap}
      onDragEnd={trap}
      onDragEnter={trap}
      onDragExit={trap}
      onDragLeave={trap}
      onDragOver={trap}
      onDragStart={trap}
      onDrop={trap}
      onMouseDown={trap}
      onMouseEnter={trap}
      onMouseLeave={trap}
      onMouseMove={trap}
      onMouseOver={trap}
      onMouseOut={trap}
      onMouseUp={trap}
      onKeyDown={trap}
      onKeyPress={trap}
      onKeyUp={trap}
      onFocus={trap}
      onBlur={trap}
      onChange={trap}
      onInput={trap}
      onInvalid={trap}
      onSubmit={trap}
      onTouchCancel={trap}
      onTouchEnd={trap}
      onTouchMove={trap}
      onTouchStart={trap}
    >
      {children}
    </div>
  );
}

EventTrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default EventTrap;
