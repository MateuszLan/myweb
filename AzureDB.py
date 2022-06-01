import pypyodbc
import azurecred


class AzureDB:
    dsn = 'DRIVER=' + azurecred.AZDBDRIVER + ';SERVER=' + azurecred.AZDBSERVER + ';PORT=1433;DATABASE=' + azurecred.AZDBNAME + ';UID=' + azurecred.AZDBUSER + ';PWD=' + azurecred.AZDBPW

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
            exit(1)

    def azureAddData(self, imie, text):
            self.cursor.execute('INSERT into data (name, text) values (\'' + imie + "', '" + text + "')")
            self.conn.commit()

# zakomentowana funkcja usuwająca rekord z bazy gdzie name = Adam
    def azureDeleteData(self, nick, text1):
        self.cursor.execute("DELETE FROM data WHERE name = '"+nick+"' and text = '"+text1+"'")
        self.conn.commit()

    def azureUPData(self, nick, text1, text2):
            self.cursor.execute("UPDATE data SET text = '"+text2+"' WHERE name = '"+nick+"' and text = '"+text1+"'")
            self.conn.commit()

