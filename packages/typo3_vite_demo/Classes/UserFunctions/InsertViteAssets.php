namespace FlorianGeierstanger\Typo3ViteDemo\UserFunctions; 

final class InsertViteAssets {
  /**
   * Output a string
   *
   * @param  string          Empty string (no content to process)
   * @param  array           TypoScript configuration
   * @return string          HTML output, showing the current server time.
   */
  public function printString(string $content, array $conf): string
  {
    return '<p>Insert Vite assets here</p>';
  }
}