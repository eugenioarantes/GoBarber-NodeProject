import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddingCreatedAtAndUpdatedAt1654279202480
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('appointments', [
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
      new TableColumn({
        name: 'date',
        type: 'timestamp with time zone',
        isNullable: false,
      }),
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
