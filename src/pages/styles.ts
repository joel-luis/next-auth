import { styled } from 'styles'

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',

  form: {
    display: 'flex',
    maxWidth: '400px',
    gap: '1rem',
    flexDirection: 'column',
    flex: 1,
  },

  input: {
    borderRadius: '6px',
    border: 0,
    backgroundColor: '$gray800',
    color: '$gray300',
    padding: '1.25rem',
    fontSize: '16px',

    '&::placeholder': {
      color: '$gray300',
    },
  },

  button: {
    background: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 6,
    padding: '1.125rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    transition: 'all 0.2s ease-in-out',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
