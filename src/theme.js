import affinityTheme from "@allied-solutions/affinity-sd";

const theme = {
  ...affinityTheme,
  typeStyles: {
    ...affinityTheme.typeStyles,
    h1: affinityTheme.typeStyles.headlineLarge,
    h2: affinityTheme.typeStyles.headlineMedium,
    h3: affinityTheme.typeStyles.headlineSmall,
    h4: affinityTheme.typeStyles.titleLarge,
    h5: affinityTheme.typeStyles.titleMedium,
    h6: affinityTheme.typeStyles.titleSmall,
  },
  colors: {
    ...affinityTheme.colors,
    // primary: affinityTheme.colors.green,
  },
  gradients: {
    ...affinityTheme.gradients,
    // primary: affinityTheme.gradients.green,
  },
  shadows: {
    ...affinityTheme.shadows,
    primary: affinityTheme.shadows.green,
  },
  buttons: {
    ...affinityTheme.buttons,
    primary: "green",
  },
  fontSizes: {
    ...affinityTheme.fontSizes,
    inputs: {
      ...affinityTheme.fontSizes.inputs,
      default: affinityTheme.fontSizes.inputs.lg,
    },
  },
  sizes: {
    ...affinityTheme.sizes,
    buttons: {
      ...affinityTheme.sizes.buttons,
      default: affinityTheme.sizes.buttons.lg,
    },
    inputs: {
      ...affinityTheme.sizes.inputs,
      default: affinityTheme.sizes.inputs.sm,
    },
  },
};

export default theme;
