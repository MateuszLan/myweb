import pypyodbc
import azurecred
class AzureDB:
    dsn='DRIVER='+azurecred.AZDBDRIVER+';SERVER='+azurecred.AZDBSERVER+';PORT=1433;DATABASE='+azurecred.AZDBNAME+';UID='+azurecred.AZDBUSER+';PWD='+ azurecred.AZDBPW
    def __init__(self):
        self.conn = pypyodbc.connect(self.dsn)
        self.cursor = self.conn.cursor()
    def finalize(self):
        if self.conn:
            self.conn.close()
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.finalize()
    def __enter__(self):
        return self
    def azureGetData(self):
        try:
            self.cursor.execute("SELECT name,text from data")
            data = self.cursor.fetchall()
            return data
        except pypyodbc.DatabaseError as exception:
            print('Failed to execute query')
            print(exception)
            exit (1)

    # def azureAddData(self, imie, tekst):
    #     # self.cursor.execute('INSERT into data (name, text) values (\'' + imie + "', '" + tekst + "')")
    #     # lol = 'INSERT into data (name, text) values (\'' + imie
    #     # lol2 = "', '" + tekst + "')"
    #     # lolol= lol + lol2
    #     # self.cursor.execute(lolol)
    #     self.cursor.execute('INSERT into data (name, text) values (\'' + imie + '\', \'' + tekst + "')")
    #     self.conn.commit()
        # self.cursor.execute("INSERT into data (name, text) values ('imie', 'Ta stronka jest suuper...')")
# zakomentowana funkcja dodająca do bazy
    def azureAddData(self, imie):
        self.cursor.execute('INSERT into data (name, text) values (\'' + imie + "', 'Noo powiedzmy że nic nie działa')")
        self.conn.commit()
#zakomentowana funkcja usuwająca rekord z bazy gdzie name = Adam
#def azureDeleteData(self):
#self.cursor.execute("DELETE FROM data WHERE name = 'Adam'")
#self.conn.commit()