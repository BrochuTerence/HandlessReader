<?php
class UserData
{
    private $_id,
            $_user,
            $_text_size,
            $_marge_size,
            $_contrast_value,
            $_text01_progression,
            $_file_id,
            $_files_number;

  public function __construct(array $donnees)
  {
    $this->hydrate($donnees);
  }

  public function hydrate(array $donnees)
  {

    foreach ($donnees as $key => $value)
    {
      $method = 'set'.ucfirst($key);

      if (method_exists($this, $method))
      {
        $this->$method($value);
      }
    }
  }

  function listeAttributs()
  {
    foreach ($this as $attribut => $valeur)
    {
      echo '<strong>', $attribut, '</strong> => ', $valeur, '<br />';
    }
  }

  // GETTERS //
  public function id()
  {
    return $this->_id;
  }

  public function user()
  {
    return $this->_user;
  }

  public function text_size()
  {
    return $this->_text_size;
  }

  public function marge_size()
  {
    return $this->_marge_size;
  }

  public function contrast_value()
  {
    return $this->_contrast_value;
  }

  public function text01_progression()
  {
    return $this->_text01_progression;
  }

  public function file_id()
  {
    return $this->_file_id;
  }

  public function files_number()
  {
    return $this->_files_number;
  }

  // SETTERS
  //Il est important de préciser que la première lettre du nom de l'attribut doit être en majuscule.
  //Par exemple, le setter correspondant à nom est setNom.

  public function setId($id)
  {
    $id = (int) $id;

    if ($id > 0)
    {
      $this->_id = $id;
    }
  }

  public function setUser($user)
  {
    if (is_string($user))
    {
      $this->_user = $user;
    }
  }


  public function setText_size($text_size)
  {
    $text_size = (int) $text_size;

    if ($text_size > 0)
    {
      $this->_text_size = $text_size;
    }
  }

  public function setMarge_size($marge_size)
  {
    $marge_size = (int) $marge_size;

    if ($marge_size > 0)
    {
      $this->_marge_size = $marge_size;
    }
  }

  public function setContrast_value($contrast_value)
  {
    $contrast_value = (int) $contrast_value;

    if ($contrast_value > 0)
    {
      $this->_contrast_value = $contrast_value;
    }
  }


  public function setText01_progression($text01_progression)
  {
    $text01_progression = floatval($text01_progression);

    if ($text01_progression >= 0)
    {
      $this->_text01_progression = $text01_progression;
    }
  }

    public function setFile_id($file_id)
  {
    $file_id  = (int) ($file_id);

    if ($file_id >= 0)
    {
      $this->_file_id = $file_id;
    }
  }

  public function setFiles_number($files_number)
  {
    $files_number  = (int) ($files_number);

    if ($files_number >= 0)
    {
      $this->_files_number = $files_number;
    }
  }

}
