export const renderIf = (conditional, component, fallbackComponent) => {
    return conditional ? component : fallbackComponent;
}