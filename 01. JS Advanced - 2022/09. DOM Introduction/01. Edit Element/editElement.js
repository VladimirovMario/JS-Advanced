function editElement(ref, match, replacer) {
  const content = ref.textContent;
  const matcher = content.split(match);
  const edited = matcher.join(replacer);
    ref.textContent = edited;
}
