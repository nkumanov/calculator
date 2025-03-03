export interface IActionElementType {
  content: string;
  type: EActionElementType;
}

export enum EActionElementType {
  DIVISION = 'DIVISION',
  SUBSTRACTION = 'SUBSTRACTION',
  EQUALITY = 'EQUALITY',
  ADDITION = 'ADDITION',
  MULTIPLICATION = 'MULTIPLICATION',
  MODULUS = 'MODULUS',
  CLEAR = 'CLEAR',
  CONTENT = 'CONTENT',
  DECIMAL = 'DECIMAL',
}

export const actionElements: IActionElementType[] = [
  {
    content: 'C',
    type: EActionElementType.CLEAR,
  },
  {
    content: '%',
    type: EActionElementType.MODULUS,
  },
  {
    content: '/',
    type: EActionElementType.DIVISION,
  },
  {
    content: '7',
    type: EActionElementType.CONTENT,
  },
  {
    content: '8',
    type: EActionElementType.CONTENT,
  },
  {
    content: '9',
    type: EActionElementType.CONTENT,
  },
  {
    content: '*',
    type: EActionElementType.MULTIPLICATION,
  },
  {
    content: '4',
    type: EActionElementType.CONTENT,
  },
  {
    content: '5',
    type: EActionElementType.CONTENT,
  },
  {
    content: '6',
    type: EActionElementType.CONTENT,
  },
  {
    content: '-',
    type: EActionElementType.SUBSTRACTION,
  },
  {
    content: '1',
    type: EActionElementType.CONTENT,
  },
  {
    content: '2',
    type: EActionElementType.CONTENT,
  },
  {
    content: '3',
    type: EActionElementType.CONTENT,
  },
  {
    content: '+',
    type: EActionElementType.ADDITION,
  },
  {
    content: '0',
    type: EActionElementType.CONTENT,
  },
  {
    content: '.',
    type: EActionElementType.DECIMAL,
  },
  {
    content: '=',
    type: EActionElementType.EQUALITY,
  },
];
