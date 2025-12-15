
module.exports = {
  theme: {
    extend: {
      keyframes: {
        ki: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
      animation: {
        ki: 'ki 1s ease-in-out infinite',
      },
    },
  },
};
