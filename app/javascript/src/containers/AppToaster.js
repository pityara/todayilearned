import React from 'react';
import { Position, Toaster } from '@blueprintjs/core';

export const AppToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP_RIGHT,
});

