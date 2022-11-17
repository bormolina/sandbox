
import smtplib, ssl, data

port = 465  # For SSL
smtp_server = "smtp.gmail.com"
sender_email = data.mail # Enter your address
receiver_email = data.mail2  # Enter receiver address
password = data.ps
message = "Mail de prueba"

context = ssl.create_default_context()
with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)