<?php
class UserDataManager
{
  private $_db; // Instance de PDO

  public function __construct($db)
  {
    $this->setDb($db);
  }


  // Execute a request to test if the character exists
  public function exists($info)
  {
    // if the parameter is an integer, it's considered as an id and return a boolean if a character with this id exists
    if (is_int($info))
    {
      return (bool) $this->_db->query('SELECT COUNT(*) FROM User_data WHERE id = '.$info)->fetchColumn();
    }
    // else, the parameter is considered as a name and return a boolean if a character with this name exists
    $q = $this->_db->prepare('SELECT COUNT(*) FROM User_data WHERE user = :user');
    $q->execute([':user' => $info]);
    return (bool) $q->fetchColumn();
  }

  public function get($info)
  {
    // Si le paramètre est un entier, on veut récupérer le user avec son identifiant.
    // Exécute une requête de type SELECT avec une clause WHERE, et retourne un objet User_data.
    if (is_int($info))
    {
      $q = $this->_db->query('SELECT id, user, text_size, marge_size, contrast_value, text01_progression, file_id, files_number FROM User_data WHERE id = '.$info);
      $donnees = $q->fetch(PDO::FETCH_ASSOC);

      return new UserData($donnees);
    }
    // Sinon, on veut récupérer le user avec son nom.
    // Exécute une requête de type SELECT avec une clause WHERE, et retourne un objet User_data.
    else
    {
      $q = $this->_db->prepare('SELECT id, user, text_size, marge_size, contrast_value, text01_progression, file_id, files_number FROM User_data WHERE user = :user');
      $q->execute([':user' => $info]);

      return new UserData($q->fetch(PDO::FETCH_ASSOC));
    }
  }


  public function update(UserData $userdata)
{
  // Prépare une requête de type UPDATE.
  $q = $this->_db->prepare('UPDATE User_data SET id = :id, user = :user, text_size = :text_size, marge_size = :marge_size, contrast_value = :contrast_value, text01_progression = :text01_progression, file_id = :file_id,  files_number = :files_number WHERE id = :id');

  // Assignation des valeurs à la requête.
  $q->bindValue(':user', $userdata->user(), PDO::PARAM_STR);
  $q->bindValue(':id', $userdata->id(), PDO::PARAM_INT);
  $q->bindValue(':text_size', $userdata->text_size(), PDO::PARAM_INT);
  $q->bindValue(':marge_size', $userdata->marge_size(), PDO::PARAM_INT);
  $q->bindValue(':contrast_value', $userdata->contrast_value(), PDO::PARAM_INT);
  $q->bindValue(':text01_progression', $userdata->text01_progression(), PDO::PARAM_STR);
  $q->bindValue(':file_id', $userdata->file_id(), PDO::PARAM_INT);
  $q->bindValue(':files_number', $userdata->files_number(), PDO::PARAM_INT);
  // Exécution de la requête.
  $q->execute();
}



  public function setDb(PDO $db)
  {
    $this->_db = $db;
  }
}
