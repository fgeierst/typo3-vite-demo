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
      \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName('EXT:typo3_vite_demo/Resources/Public/JavaScript/manifest.json')
    );
    $manifest = json_decode($file, true);

    // Build urls
    $path = '/typo3conf/ext/typo3_vite_demo/Resources/Public/JavaScript/';
    $scriptSrc = $path . $manifest['main.js']['file'];
    $stylesheetHref = $path . $manifest['main.js']['css'][0];
    
    // Return script and link tags
    $content = '<!-- Vite Assets -->'; 
    $content .= '<script src="' . $scriptSrc . '"></script>';
    $content .= '<link rel="stylesheet" href="' . $stylesheetHref . '">';
    
    return $content;

  }
}