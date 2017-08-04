const fetchEventConfig = (nextState) => {
  const filename = nextState.location.pathname.match(/event\/([\d\D]+[^/])/)[1];
}

export default fetchEventConfig;