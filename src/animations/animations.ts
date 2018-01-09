import {trigger, transition, style, animate} from "@angular/animations";

export const fadeInEffect = trigger(
  'fadeInEffect',
    [
      transition(
        ':enter', [
          style({transform: '', opacity: 0}),
          animate('500ms', style({transform: '', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: '', 'opacity': 1}),
          animate('500ms', style({transform: '', 'opacity': 0}))
        ]
      )]
);
