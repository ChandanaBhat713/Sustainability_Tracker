# Generated by Django 5.1.7 on 2025-03-08 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_db1_sustainability'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sustainability',
            old_name='point',
            new_name='points',
        ),
    ]
