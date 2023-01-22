<?php

namespace FlorianGeierstanger\Typo3ViteDemo\UserFunctions; 

final class InsertViteAssets {
  /**
   * Output a string
   *
   * @return string          HTML output
   */
  public function getScriptTags(): string
  {

    // Read the manifest file and decode JSON
    $file = file_get_contents(
      \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName('EXT:typo3_vite_demo/Resources/Public/Vite/manifest.json')
    );
    
    $manifest = json_decode($file, true);

    // Build urls
    $path = '/typo3conf/ext/typo3_vite_demo/Resources/Public/Vite/';
    $scriptSrc = $path . $manifest['packages/typo3_vite_demo/Resources/Private/JavaScript/main.js']['file'];
    $stylesheetFiles = $manifest['packages/typo3_vite_demo/Resources/Private/JavaScript/main.js']['css'];
    
    // Return script and link tags
    $content = '<!-- Vite Assets -->'; 
    $content .= '<script src="' . $scriptSrc . '"></script>';
    
    // check if there are any stylesheets imported by Vite
    if (is_array($stylesheetFiles)) {
        foreach ($stylesheetFiles as $stylesheetFile) {
            $stylesheetPath = $path . $stylesheetFile;
            $content .= '<link rel="stylesheet" href="' . $stylesheetPath . '">';
        }
    }
    
    return $content;

  }
}
