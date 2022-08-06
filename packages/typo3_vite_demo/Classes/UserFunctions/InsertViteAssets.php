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

    // Read the manifest file
    $json = file_get_contents(
      \TYPO3\CMS\Core\Utility\GeneralUtility::getFileAbsFileName('EXT:typo3_vite_demo/Resources/Public/JavaScript/manifest.json')
    );
      
    // Decode the JSON 
    $json_data = json_decode($json,true);

    $scriptSrc = '/typo3conf/ext/typo3_vite_demo/Resources/Public/JavaScript/'.$json_data['main.js']['file'];
    
    // Return script tag
    $content = '<!-- Vite JavaScript -->'; 
    $content .= '<script src="' . $scriptSrc . '"></script>';

    return $content;

  }
}